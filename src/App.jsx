import { useState } from 'react'; 
import reactImg from './assets/react-core-concepts.png'
import componentsImg from './assets/components.png'
import CoreConcept from './components/CoreConcept';

import {CORE_CONCEPTS} from './data'
import Header from './components/Header/Header';
import TabButton from './components/TabButton';       
import {EXAMPLES} from './data'                          


function App() {
  const[selectedTopic,setSelectedTopic] = useState()
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
}
  return (
    <div>
     <Header/>
      <main>
       <section id="core-concepts">
       <h2>Core concepts</h2>
        <ul>
        <CoreConcept
        title="Component"
        description="The core UI building block"
        image={componentsImg}
        
        />
        <CoreConcept
        title ={CORE_CONCEPTS[1].title} 
        description={CORE_CONCEPTS[1].description}
        image= {CORE_CONCEPTS[1].image}
        />
        <CoreConcept
        title ={CORE_CONCEPTS[2].title}
        description={CORE_CONCEPTS[2].description}
        image= {CORE_CONCEPTS[2].image}
        />
        {/* <CoreConcept
        title ={CORE_CONCEPTS[3].title}
        description={CORE_CONCEPTS[3].description}
        img= {CORE_CONCEPTS[3].image}
        /> */}
        {/* Another way for fetching data of props is  */}

        <CoreConcept {...CORE_CONCEPTS[3]}/>

        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected ={selectedTopic == 'components'} onSelect={()=>handleClick('components')}   >Components</TabButton>
            <TabButton isSelected ={selectedTopic == 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected ={selectedTopic == 'props'} onSelect={() =>handleClick('props')}>Props</TabButton>
            <TabButton isSelected ={selectedTopic == 'state'} onSelect = {() => handleClick('state')}>State</TabButton>

          </menu>
         
        {!selectedTopic ? ( <p>Please select a topic</p> ):
        (  <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
         <p>{EXAMPLES[selectedTopic].description}</p>
         <pre>
         <code>
            {EXAMPLES[selectedTopic].code}
         </code>
         </pre>
            </div>
        )
        }
          
     
        </section>
      </main>
    </div>
  );
}

export default App;
