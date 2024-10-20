import React, { useState, useRef, useEffect } from 'react';
import whisperIcon from "./whisper.svg";

function RealTime() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const websocketRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const connectWebSocket = () => {
    websocketRef.current = new WebSocket('ws://localhost:5666');

    websocketRef.current.onopen = () => {
      console.log('Connected to WebSocket server');
      setIsConnected(true);
      setError(null);
    };

    websocketRef.current.onmessage = (event) => {
      console.log('Received message:', event.data);
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'transcript' && data.text) {
          setTranscript(prev => prev + ' ' + data.text);
          setIsLoading(false);
        } else if (data.type === 'info') {
          console.log('Server info:', data.message);
        } else if (data.type === 'error') {
          console.error('Server error:', data.message);
          setError(data.message);
          setIsLoading(false);
        } else {
          console.warn('Received unexpected data:', data);
        }
      } catch (error) {
        console.error('Error parsing message:', error);
        setError('Error parsing server message');
        setIsLoading(false);
      }
    };

    websocketRef.current.onerror = (error) => {
      console.error('WebSocket error:', error);
      setIsConnected(false);
      setError('WebSocket error occurred');
      setIsLoading(false);
    };

    websocketRef.current.onclose = (event) => {
      console.log('WebSocket connection closed:', event.code, event.reason);
      setIsConnected(false);
      setError('WebSocket connection closed');
      setIsLoading(false);
      setTimeout(connectWebSocket, 5000);
    };
  };

  useEffect(() => {
    connectWebSocket();

    return () => {
      if (websocketRef.current) {
        websocketRef.current.close();
      }
    };
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0 && websocketRef.current && websocketRef.current.readyState === WebSocket.OPEN) {
          const reader = new FileReader();
          reader.onload = () => {
            const base64Audio = btoa(reader.result);
            websocketRef.current.send(JSON.stringify({
              type: 'audio',
              audio: base64Audio
            }));
          };
          reader.readAsBinaryString(event.data);
        }
      };

      mediaRecorderRef.current.start(10000); // Collect 1 second of audio at a time
      setIsRecording(true);
      setIsLoading(true);
      setError(null);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      setError('Error accessing microphone: ' + error.message);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsLoading(false);
    }
  };

  const clearTranscript = () => {
    setTranscript('');
    setError(null);
  };
  return (
    <section className="mainContent">
      <div className="text-center bg-secondaryBg dark:bg-balBrand rounded-lg m-2">
        <div className="inline-flex w-64 h-full md:float-left place-items-center rounded-lg m-2 dark:bg-mainBg md:mt-14">
          <a href="https://openai.com/research/whisper" target="_blank" rel="noreferrer">
            <img
              src={whisperIcon}
              alt="Whisper Icon"
              className="w-64 h-56 hover:scale-110 transform duration-500 rounded-lg"
              loading="lazy"
            />
          </a>
        </div>
        <div className="overflow-hidden pt-2 mx-2">
          <h1 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg border-dBrand">
            Real-Time Transcription API
          </h1>
          <p className="mt-3 mx-auto text-justify tracking-tight indent-10">
            <b className="text-2xl">T</b>his real-time transcription component leverages advanced speech recognition technology to convert spoken language into written text in real-time. It allows for immediate transcription of audio input, making it ideal for live captioning, note-taking, and accessibility applications.
          </p>
          <p className="mx-auto text-justify tracking-tighter indent-10">
            <b className="text-2xl">B</b>y providing instant text output from audio input, this tool enhances accessibility for individuals with hearing impairments and enables efficient documentation of spoken content. Its real-time capability makes it particularly useful for live events, meetings, and interactive applications where immediate text representation of speech is crucial.
          </p>
        </div>
      </div>

      <div className="mx-2 text-center md:px-10">
        <h3 className="mb-4 dark:text-secondaryBg font-semibold underline cursor-default text-balBrand border-y-2 dark:border-mainBg border-dBrand">
          How To Use:
        </h3>
        <p className="mt-3 mx-auto text-justify indent-10">
          <b className="text-2xl">U</b>sing the Real-Time Transcription component is simple. Click the "Start Recording" button to begin capturing audio from your microphone. Speak clearly, and you'll see the transcription appear in real-time below. When you're finished, click "Stop Recording". You can clear the transcript at any time using the "Clear" button. This system provides instant speech-to-text conversion, enhancing accessibility and efficiency for various applications.
        </p>
      </div>

      <div className="w-full m-4">
        <div className="flex justify-center space-x-4">
          <button
            className={`btn whitespace-nowrap p-4 ${isRecording ? 'bg-red-500' : ''} ${!isConnected ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={isRecording ? stopRecording : startRecording}
            disabled={!isConnected || (isLoading && !isRecording)}
          >
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </button>
          {transcript && (
            <button
              className="btn whitespace-nowrap p-4"
              onClick={clearTranscript}
            >
              Clear
            </button>
          )}
        </div>
        {error && (
          <p className="text-red-500 text-center mt-4">
            Error: {error}
          </p>
        )}
        {isLoading && (
          <div className="flex justify-center items-center mt-4">
            <div className="animate-spin mr-2">
              {/* ... (loading SVG) ... */}
            </div>
            Transcribing...
          </div>
        )}
        {transcript && (
          <div className="inline-flex flex-col w-full mt-4">
            <h4 className="dark:text-mainBg text-2xl inline-flex max-w-min right-0 mx-auto">
              Transcript
            </h4>
            <p className="text-justify bg-gray-100 m-2 p-2 rounded-lg border-2 border-dBrand text-dBrand">
              {transcript}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default RealTime;