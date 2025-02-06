import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import UseAxiosPublic from "./UseAxiosPublic";


const useRole = () => {
  const { user, loading: authLoading } = useAuth();
  const axiosPublic = UseAxiosPublic();

  const { data: role, isLoading, isError, error } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !!user?.email && !authLoading, // Only fetch role if user exists
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/role/${user?.email}`);
      return res.data?.role;
    },
    refetchOnWindowFocus: false,
  });

  return {
    role,
    loading: authLoading || isLoading,
    error: isError ? error.message : null,
  };
};

export default useRole;
