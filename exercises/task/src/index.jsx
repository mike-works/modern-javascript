import 'regenerator-runtime/runtime';
import { render } from 'react-dom';
import { PlaceSearch } from './PlaceSearch';

/**
 * Render the <PlaceSearch> component into the #root element
 */
const root = document.getElementById('root');
render(<PlaceSearch />, root);