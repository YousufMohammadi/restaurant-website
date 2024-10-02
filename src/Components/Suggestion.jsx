import SuggestionCard from './SuggestionCard';
import SuggestionCardSmall from './SuggestionCardSmall';
import suggest1 from '../assets/suggest1.jpg';
import suggest2 from '../assets/suggest2.jpg';
import suggest3 from '../assets/suggest3.jpg';

function Suggestion() {
  return (
    <section className="flex-start relative flex h-full w-full flex-col items-center gap-10 py-5 lg:flex-row lg:items-start lg:justify-center lg:gap-0">
      <div className="flex flex-col items-center justify-center lg:w-2/3">
        <SuggestionCard image={suggest1} />
      </div>
      <div className="flex flex-col justify-center gap-10 lg:w-[350px] lg:gap-2">
        <SuggestionCardSmall image={suggest2} />
        <SuggestionCardSmall image={suggest3} />
      </div>
    </section>
  );
}

export default Suggestion;
