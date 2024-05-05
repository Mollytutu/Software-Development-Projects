
import { FC, useEffect, useState } from 'react';
import { MAX_File_SIZE } from '~/constants/config';
import { selectOptions } from '~/utils/helps';

interface MenuProps {}

type input = {
  name: string;
  price: number;
  category: string;
  file: undefined | File;
};

const initialInput: input = {
  name: '',
  price: 0,
  category: '',
  file: undefined,
};

const Menu: FC<MenuProps> = ({}) => {
  const [input, setInput] = useState<input>(initialInput);
  const [preview, setPreview] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!input.file) return;
    const objectUrl = URL.createObjectURL(input.file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [input.file]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return setError('Please select an image');
    if (e.target.files[0].size > MAX_File_SIZE) return setError('File size is too big');
    setInput((prev) => ({ ...prev, file: e.target.files![0] }));
  };

  const addMenuItem = () => {
    // Implement addMenuItem logic here
  };

  return (
    <>
      <div>
        <div className="mx-auto flex max-w-xl flex-col gap-2 w-200">
          <input
            name="name"
            className="h-12 rounded-2xl border-none bg-gray-200 px-2"
            type="text"
            placeholder="Serivce Name"
            onChange={(e) => setInput((prev) => ({ ...prev, name: e.target.value }))}
            value={input.name}
          />

          <input
            name="price"
            className="h-12 px-2 rounded-2xl border-none bg-gray-200"
            type="number"
            placeholder="Charge"
            onChange={(e) => setInput((prev) => ({ ...prev, price: Number(e.target.value) }))}
            value={input.price}
          />

          <label htmlFor="category" className="h-28 rounded-2xl pl-6 pt-8 border-none bg-gray-200">
            Category:
            <select
              id="category"
              value={input.category}
              onChange={(e) => setInput((prev) => ({ ...prev, category: e.target.value }))}
              className="h-12"
            >
              <option value="">Select a category</option>
              {selectOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="file" className="relative h-12 cursor-pointer rounded-2xl bg-gray-200 font-medium text-purple-600">
            <span className="sr-only">File input</span>
            <div className="flex h-full items-center justify-center">
              {preview ? (
                <div className="relative h-3/4 w-full">
                  <img alt="preview" style={{ objectFit: 'contain' }} src={preview} />
                </div>
              ) : (
                <span>Select image</span>
              )}
            </div>
            <input
              name="file"
              id="file"
              onChange={handleFileSelect}
              accept="image/jpeg, image/png, image/jpg"
              type="file"
              className="sr-only"
            />
          </label>

          <button className="h-12 rounded-2xl bg-gray-200" disabled={!input.file || !input.name || !input.category} onClick={addMenuItem}>
            Add menu item
          </button>
        </div>
        {error && <p className="text-xs text-red-600">{error}</p>}
      </div>
    </>
  );
};

export default Menu;
