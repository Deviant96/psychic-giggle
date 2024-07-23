'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const router = useRouter();

    // useEffect(() => {
      if (typeof window !== 'undefined') {
        console.log("is an window")
        const user = localStorage.getItem('user');
        if (!user) {
          router.replace('/signin');
        }

        return <WrappedComponent {...props} />;
      }
    // }, [router]);


    // If we are on server, return null
    return null;
  };
};

export default withAuth;
