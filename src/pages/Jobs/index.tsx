import { Button } from '@/components/Button';
import { Slider } from '@/components/Slider';
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';

import { useTheme } from '@/contexts/useTheme';

import { BiSearchAlt2 } from 'react-icons/Bi';
import { MdLocationOn } from 'react-icons/Md';

export const Jobs = () => {
  return (
    <>
      <Input
        icon={<BiSearchAlt2 size={24} />}
        placeholder="Filter by title, companies, expertise…"
      />
    </>
  );
};
