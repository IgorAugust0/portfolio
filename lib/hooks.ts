import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import type { SectionName } from '@/lib/types';

export default function useSectionObserver({
  sectionName,
  threshold = 0.5,
}: {
  sectionName: SectionName;
  threshold?: number;
}) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, lastClicked } = useActiveSectionContext();

  // Set the active section if the section is in view and the last click was more than 1 second ago
  useEffect(() => {
    if (inView && Date.now() - lastClicked > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, lastClicked, sectionName]); // dependencies array

  return ref;
}
