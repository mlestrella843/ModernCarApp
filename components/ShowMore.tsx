"use client"

import { useRouter } from 'next/navigation';
import { ShowMoreProps } from '@/types';
import { CustomButton } from '.';
import { updateSearchParams } from '@/utils';

const ShowMore = ( {pageNumber, isNext, setLimit }: ShowMoreProps ) => {

    const handleNavigation = () => {
        const newLimit = ( pageNumber + 1) * 10;
        setLimit(newLimit);
    }

  return (
    <div className="w-full flex-center gap-5 mt-10">
        { !isNext && ( 
            <CustomButton 
                title="Show More"
                btnType='button'
                containerStyles="bg-[#D8539E] rounded-full text-white"
                handleClick={handleNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore