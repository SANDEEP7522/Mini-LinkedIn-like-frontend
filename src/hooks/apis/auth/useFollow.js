import { toggleFollow } from '@/apis/auth';
import { useState } from 'react';

const useFollowUser = (initialState = false) => {
  const [isFollowing, setIsFollowing] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFollowToggle = async (userId) => {
    try {
      setLoading(true);
      const response = await toggleFollow(userId);

      if (response.success) {
        setIsFollowing(response.followings);
        setError(null);
      } else {
        setError(response.message || 'Failed to toggle follow');
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return {
    isFollowing,
    loading,
    error,
    handleFollowToggle,
  };
};

export default useFollowUser;
