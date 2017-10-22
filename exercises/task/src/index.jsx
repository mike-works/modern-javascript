import { render } from 'react-dom';
import { PlaceSearch } from './PlaceSearch';
import 'regenerator-runtime/runtime';

/**
 * Render the <PlaceSearch> component into the #root element
 */
const root = document.getElementById('root');
render(<PlaceSearch />, root);