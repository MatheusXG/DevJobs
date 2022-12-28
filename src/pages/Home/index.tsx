import { Button } from '@/components/Button';
import { Slider } from '@/components/Slider';
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';
import Checkbox from '@/components/Checkbox';

import { useTheme } from '@/contexts/useTheme';

import { BiSearchAlt2 } from 'react-icons/Bi';
import { MdLocationOn } from 'react-icons/Md';
import { Container } from '@/components/Container';

export const Home = () => {
  return (
    <>
      {/* <Checkbox
        labelColor="midnight"
        label="Full Time Only"
        labelFor="checkbox"
      /> */}
      {/* <Input
        placeholder="Filter by title, companies, expertise..."
        icon={<BiSearchAlt2 size={24} />}
      /> */}
      <Header />
    </>
  );
};
