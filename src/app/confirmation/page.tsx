"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AppLayout from '@/components/layouts/Applayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

type UserData = {
  name: string;
  email: string;
};

export default function ConfirmationPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>({
    name: "Jonatan Kristof",
    email: "jonatan.kristof@example.com"
  });

  useEffect(() => {
    const storedData = localStorage.getItem('conferenceUserData');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setUserData(parsedData);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  const handleDownloadTicket = () => {
    console.log('Download ticket logic would go here');
  };

  const handleAddCalendar = () => {
    console.log('Add to calendar logic would go here');
  };

  return (
    <AppLayout 
      title={`Congrats, ${userData.name}!`}
      subtitle="We've emailed your tickets in the run up to the event."
    >
      <div className="flex flex-col items-center">
        <p className="text-gray-300 text-sm text-center mb-6">
          You can download your ticket to your device, or add it directly to your calendar to get reminders.
        </p>
        
        <div className="transform hover:scale-105 transition-transform duration-300 mb-6">
          <Card name={userData.name} email={userData.email} />
        </div>
        
        <div className="flex space-x-3">
          <Button onClick={handleDownloadTicket}>
            Download Ticket
          </Button>
          <Button 
            onClick={handleAddCalendar} 
            className="bg-gradient-to-r from-indigo-500 to-blue-500"
          >
            Add to Calendar
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}
