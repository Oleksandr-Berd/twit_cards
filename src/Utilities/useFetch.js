import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url, { page, perPage }, filter) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios(
          `${url}?page=${page}&limit=${perPage}`
           
        );
        const responseData = await response.data;
        switch (filter) {
          case "Follow":
            setUsers(responseData.filter(el => el.isFollowing === false))
            console.log(users);
            break
          case "Following":
             setUsers(responseData.filter(el => el.isFollowing === true))
            break
          default:
            setUsers(responseData)
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url, page, perPage, filter]);
  return { users, isLoading, error };
}
export default useFetch;
