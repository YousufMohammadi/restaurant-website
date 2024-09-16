import SuggestionCard from './SuggestionCard';
import SuggestionCardSmall from './SuggestionCardSmall';
import suggest1 from '../assets/suggest1.jpg';
import suggest2 from '../assets/suggest2.jpg';
import suggest3 from '../assets/suggest3.jpg';

function Suggestion() {
  return (
    <section className="flex w-full items-center justify-around py-5">
      <div className="flex w-2/3 flex-col items-center justify-center">
        <SuggestionCard image={suggest1} />
      </div>
      <div className="flex flex-col justify-center gap-10">
        <SuggestionCardSmall image={suggest2} />
        <SuggestionCardSmall image={suggest3} />
      </div>
    </section>
  );
}

export default Suggestion;
