import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import Choices from 'choices.js';

import Country from '../../../data/countryLicensed';

const CountrySelect = memo(
  ({
    value = '',
    onChange,
    placeholder = 'Select a country',
    required = false,
    error,
    name = 'country'
  }) => {
    const selectRef = useRef(null);
    const choicesRef = useRef(null);
    const wrapperRef = useRef(null);

    const [fieldError, setFieldError] = useState('');

    const hasError = Boolean(error || fieldError);

    const countryChoices = useMemo(
      () =>
        Country.map(({ continente, paises }) => ({
          label: continente.nome,
          id: continente.codigo,
          choices: paises.map((pais) => ({
            value: pais.codigo,
            label: `${pais.nome} (${pais.codigo})`,
            customProperties: {
              continente: continente.nome,
              codigo: pais.codigo
            }
          }))
        })),
      []
    );

    /**
     * Inicializa Choices apenas uma vez
     */
    useEffect(() => {
      if (!selectRef.current || choicesRef.current) return;

      choicesRef.current = new Choices(selectRef.current, {
        choices: countryChoices,
        searchEnabled: true,
        shouldSort: false,
        placeholder: true,
        placeholderValue: placeholder,
        searchPlaceholderValue: 'Digite o nome do país',
        itemSelectText: '',
        removeItemButton: false,
        allowHTML: false,
        position: 'bottom'
      });

      const handleChange = (event) => {
        const selectedValue =
          event.detail?.value ?? event.target.value;

        if (required && !selectedValue) {
          setFieldError(error);
        } else {
          setFieldError('');
        }

        onChange?.(selectedValue);
      };

      selectRef.current.addEventListener('change', handleChange);

      return () => {
        selectRef.current?.removeEventListener('change', handleChange);
        choicesRef.current?.destroy();
        choicesRef.current = null;
      };
    }, [countryChoices, placeholder, required, onChange]);

    /**
     * Atualiza valor sem recriar Choices
     */
    useEffect(() => {
      if (!choicesRef.current) return;

      choicesRef.current.removeActiveItems();

      if (value) {
        choicesRef.current.setChoiceByValue(String(value));
      }
    }, [value]);

    /**
     * Validação obrigatória
     */
    useEffect(() => {
      if (required && !value) {
        setFieldError(error);
      } else {
        setFieldError('');
      }
    }, [value, required]);

    /**
     * Aplica classe de erro no container do Choices
     */
    useEffect(() => {
      const container = selectRef.current?.nextElementSibling;

      if (!container) return;

      if (hasError) {
        container.classList.add('is-invalid');
      } else {
        container.classList.remove('is-invalid');
      }
    }, [hasError]);

    return (
      <div
        ref={wrapperRef}
        className={`country-select ${hasError ? 'has-error' : ''}`}
      >      
        <select
          ref={selectRef}
          name={name}
          defaultValue=""
          //aria-label={placeholder}
        >
          {/* <option value="">{placeholder}</option> */}
        </select>
        {(error || fieldError) && (
          <div className="invalid-feedback d-block">
            {error || fieldError}
          </div>
        )}        
    </div>      
    );
  }
);

CountrySelect.displayName = 'CountrySelect';

export default CountrySelect;