import { useSession } from 'next-auth/react';

const useSessionUser = () => {
  const { data: session } = useSession();
  return session?.user || '';
};

export default useSessionUser;
