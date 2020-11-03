import { Chilli } from '../types/resources';

export const formatScovilleRating = (scoville: Chilli['scoville']) => {
  const { minimum, maximum, average, absolute } = scoville;
  const formatted = [];

  if (typeof minimum !== 'undefined') {
    formatted.push(`Min: ${minimum}`);
  }
  if (typeof maximum !== 'undefined') {
    formatted.push(`Max: ${maximum}`);
  }
  if (typeof average !== 'undefined') {
    formatted.push(`AVG: ${average}`);
  }
  if (typeof absolute !== 'undefined') {
    formatted.push(`Abs: ${absolute}`);
  }

  return formatted.join(', ');
};
