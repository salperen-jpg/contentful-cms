import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

let client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_CONTENT_DELIVERY_API,
});

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    try {
      const response = await client.getEntries();
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setIsLoading(false);
      setProjects(projects as []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, projects };
};
