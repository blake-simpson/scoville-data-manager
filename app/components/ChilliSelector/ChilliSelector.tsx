import React, { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';

import { allChilliIds, getChilliById } from '../../redux/selectors';

import { AppState } from '../../types/redux/state';
import { Chilli } from '../../types/resources';

import styles from './ChilliSelector.css';

interface SelectorProps {
  value?: Chilli['id'],
  onSelect: (id: Chilli['id']) => void;
}
interface DropdownItemProps {
  id: Chilli['id'];
  selected: (chilli: Chilli) => () => void;
  filter: string;
}

const DropdownItem = ({ id, filter, selected }: DropdownItemProps) => {
  const chilli = useSelector((state: AppState) => getChilliById(state, id));
  const noFilterMatch = filter && chilli.name.toLowerCase().indexOf(filter.toLowerCase()) < 0;

  if (!chilli || noFilterMatch) {
    return null;
  }

  return (
    <div className={styles.dropdownItem} onClick={selected(chilli)}>
      <p>{chilli.name}</p>
    </div>
  );
};

const ChilliSelector = ({ value, onSelect }: SelectorProps) => {
  const ids = useSelector((state: AppState) => allChilliIds(state));
  const [open, setOpen] = useState(false);
  const currentValue = useSelector((state: AppState) => value && getChilliById(state, value));
  const [selected, setSelected] = useState<Chilli | null>(currentValue || null);
  const [filter, setFilter] = useState('');

  const itemSelected = (chilli: Chilli) => () => {
    setSelected(chilli);
    setOpen(false);
    onSelect(chilli.id);
  };

  const toggleMenu = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.stopPropagation();
    setOpen(!open);
  };

  const filterList = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;

    setFilter(text);
  };

  return (
    <div className={classnames(styles.selector, { [styles.open]: open })}>
      <a className={classnames(styles.toggler, { [styles.noValue]: !selected})} onClick={toggleMenu}>
        <div className={styles.toggleArrow}>❮</div>
        <p className={styles.selectedText}>
          {selected ? selected.name : 'Select a Chilli ...'}
        </p>
      </a>

      {open && (
        <div className={styles.dropdown}>
          <input type="text" placeholder="Filter..." value={filter} onChange={filterList} />
          {ids.map(id => <DropdownItem filter={filter} selected={itemSelected} key={id} id={id} />)}
        </div>
      )}
    </div>
  );
};

export default ChilliSelector;
