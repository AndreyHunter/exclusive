import { AxiosError } from 'axios';

export const handleAxiosError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    if (error.response) {
      return error.response.data?.message || 'Server error occurred';
    }

    return error.message || 'No response from server';
  } else if (error instanceof Error) {
    return error.message;
  }

  return String(error) || 'Unknown error';
};
