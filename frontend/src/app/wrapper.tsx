
"use client";
import { QueryClient, QueryClientProvider } from 'react-query';



const queryClient = new QueryClient();


export default function Wrapper(props: {
  children: React.ReactNode
}) {

  return <QueryClientProvider client={queryClient}>
    {props.children}
  </QueryClientProvider>
}