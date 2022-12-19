import { Button } from '@/components/Button';
import { Slider } from '@/components/Slider';
import { useTheme } from '@/contexts/useTheme';

export const Jobs = () => {
  const { toggleTheme } = useTheme();

  return (
    <>
      <Slider name="theme" onChange={toggleTheme} />

      <Button variant="primary">Load More</Button>
    </>
  );
};
