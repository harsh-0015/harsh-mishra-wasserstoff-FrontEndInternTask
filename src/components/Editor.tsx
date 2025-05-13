'use client';

import { useEffect, useRef } from 'react';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Collaboration from '@tiptap/extension-collaboration';
import CollaborationCursor from '@tiptap/extension-collaboration-cursor';

type Props = {
  username: string;
};

const colors = [
  '#FF5733', '#33FF57', '#339BFF', '#F39C12',
  '#9B59B6', '#1ABC9C', '#E91E63', '#2ECC71',
];

export default function Editor({ username }: Props) {
  const ydocRef = useRef<Y.Doc | null>(null);
  const providerRef = useRef<WebrtcProvider | null>(null);
  const userColor = useRef(colors[Math.floor(Math.random() * colors.length)]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Collaboration.configure({
        document: (ydocRef.current = new Y.Doc()),
      }),
      CollaborationCursor.configure({
        provider: (providerRef.current = new WebrtcProvider('realtime-editor-room', ydocRef.current)),
        user: {
          name: username,
          color: userColor.current,
        },
      }),
    ],
  });

  useEffect(() => {
    return () => {
      // Clean up Yjs instance
      providerRef.current?.destroy();
      ydocRef.current?.destroy();
    };
  }, []);

  if (!editor) return <p>Loading editor...</p>;

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 bg-white text-black rounded-md shadow-lg p-6">
      <div className="mb-4 text-sm text-gray-600">
        You are editing as: <span style={{ color: userColor.current, fontWeight: 'bold' }}>{username}</span>
      </div>
      <EditorContent editor={editor} className="prose max-w-none min-h-[300px]" />
    </div>
  );
}
