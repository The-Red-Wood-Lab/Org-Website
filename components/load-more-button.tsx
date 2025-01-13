'use client'
import { Button } from '@/components/ui/button'

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export default function LoadMoreButton({ onClick, isLoading }: LoadMoreButtonProps) {
  return (
    <div className="flex justify-center mt-8">
      <Button
        onClick={onClick}
        disabled={isLoading}
        className="bg-black text-white hover:bg-gray-800 px-8 py-2 text-lg"
      >
        {isLoading ? 'Loading...' : 'Load More'}
      </Button>
    </div>
  )
}

