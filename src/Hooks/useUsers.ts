import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import type { User } from "../services/user-service";
import userService from "../services/user-service";

const useUSers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { users, error, isLoading, setErrors, setUsers };
};

export default useUSers;
