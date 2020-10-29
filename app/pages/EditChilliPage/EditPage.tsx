import React, { ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import BackButton from '../../components/BackButton';
import ChilliSelector from '../../components/ChilliSelector';

import { getChilliById } from '../../redux/selectors';
import { updateChilli, showToast } from '../../redux/actions';

import { AppState } from '../../types/redux/state';
import { ToastDisplayTypes } from '../../types/redux/actions';
import { Chilli } from '../../types/resources';

type NavigationParams = {
  id: string;
}

const EditChilliPage = () => {
  const dispatch = useDispatch();
  const navParams = useParams<NavigationParams>();
  const id = parseInt(navParams.id, 10);
  const chilli = useSelector((state: AppState) => getChilliById(state, id));

  const [values, setValues] = useState({ ...chilli });

  const valueUpdated = (type: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [type]: event.target.value,
    });
  };

  const multiValueUpdated = (type: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [type]: event.target.value.split('|').map(item => item.trim()),
    });
  };

  const descriptionUpdated = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValues({
      ...values,
      description: event.target.value,
    });
  };

  const scovilleUpdated = (type: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      scoville: {
        ...values.scoville,
        [type]: event.target.value,
      },
    });
  };

  const parentSelected = (index: number) => (parentId: Chilli['id']) => {
    const newParents = [...(values.parents || [])];

    newParents[index] = parentId;

    setValues({
      ...values,
      parents: newParents,
    });
  };

  const saveChanges = () => {
    dispatch(updateChilli(values));
    dispatch(showToast({ displayAs: ToastDisplayTypes.SUCCESS, text: 'Chilli saved!' }));
  };

  if (!chilli) {
    return (
      <>
        <BackButton />
        <h2>Chilli not found</h2>
      </>
    );
  }

  return (
    <main className="content-page">
      <button type="button" className="save-button" onClick={saveChanges}>Save</button>

      <BackButton />
      <h2>Edit Chilli</h2>

      <p>
        <strong>ID:</strong>
        {` #${chilli.id}`}
      </p>

      <div className="form-wrapper">
        <div className="form-item">
          <label>
            Slug
            <span className="required">*</span>
          </label>
          <input type="text" value={values.slug} onChange={valueUpdated('slug')} />
        </div>

        <div className="form-item">
          <label>
            Name
            <span className="required">*</span>
          </label>
          <input type="text" value={values.name} onChange={valueUpdated('name')} />
        </div>

        <div className="form-item">
          <label>A.K.A</label>
          <input type="text" value={values.aka} onChange={valueUpdated('aka')} />
        </div>

        <div className="form-item">
          <label>Latin Name</label>
          <input type="text" value={values.latinName} onChange={valueUpdated('latinName')} />
        </div>

        <div className="form-item">
          <label>Species</label>
          <input type="text" value={values.species} onChange={valueUpdated('species')} />
        </div>

        <div className="form-item">
          <label>Breeder</label>
          <input type="text" value={values.breeder} onChange={valueUpdated('breeder')} />
        </div>

        <div className="form-item">
          <label>Locations (| seperated)</label>
          <input type="text" value={values.locations ? values.locations.join('|') : ''} onChange={multiValueUpdated('locations')} />
        </div>

        <div className="form-item">
          <label>Colours (| seperated)</label>
          <input type="text" value={values.colors ? values.colors.join('|') : ''} onChange={multiValueUpdated('colors')} />
        </div>

        <div className="form-item full-width">
          <label>Parents</label>

          <div className="scoville-input">
            <ChilliSelector onSelect={parentSelected(0)} value={values.parents && values.parents[0]} />
          </div>
          <div className="scoville-input">
            <ChilliSelector onSelect={parentSelected(1)} value={values.parents && values.parents[1]} />
          </div>
        </div>

        <div className="form-item full-width">
          <label>
            Description
            <span className="required">*</span>
          </label>
          <textarea value={values.description} onChange={descriptionUpdated} />
        </div>

        <div className="form-item full-width">
          <label>
            Scoville
            <span className="required">*</span>
          </label>

          <p className="scoville-input">
            <strong>Min:</strong>
            <input type="number" value={values.scoville.minimum} onChange={scovilleUpdated('minimum')} />
          </p>
          <p className="scoville-input">
            <strong>Max:</strong>
            <input type="number" value={values.scoville.maximum} onChange={scovilleUpdated('maximum')} />
          </p>
          <p className="scoville-input">
            <strong>Average:</strong>
            <input type="number" value={values.scoville.average} onChange={scovilleUpdated('average')} />
          </p>
          <p className="scoville-input">
            <strong>Absolute:</strong>
            <input type="number" value={values.scoville.absolute} onChange={scovilleUpdated('absolute')} />
          </p>
        </div>
      </div>
    </main>
  );
};

export default EditChilliPage;
