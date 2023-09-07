import { useFormik } from "formik";
import { useState } from "react";
import InputAddBookForm from "./InputAddBookForm";
import { LanguageBox, LanguageInput } from "./AddBookForm.styled";

export default function AddBookForm() {
  // const [focused, setFocused] = useState({
  //   En: true,
  //   Uk: false, //test, delete this
  //   Ua: false,
  // });
  const [focusedEn, setFocusedEn] = useState(true);
  const [focusedUk, setFocusedUk] = useState(false);
  const [focusedUa, setFocusedUa] = useState(false);

  const toggleFocused = (value) => {
    if (value === "En") {
      setFocusedEn(prevState => !prevState)
    }
    // console.dir(e.target.value);
    // const { value } = e.target;
    // console.log(focused.En);
    // setFocused(prevState => !prevState[value]);
    // console.log(focused.En);
    //   setFocused(!focused);
    //   let currentValue = e.target.attributes.focused.nodeValue;
    //   currentValue = 'true';
    //   console.dir(e.target.attributes.focused.nodeValue);
  };

  const onSubmit = (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    actions.resetForm();
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        title: "",
        // performed: '',
        // state: '',
        // confirm: '',
        author: "",
        language: "",
        // ISBN: '',
        format: "",
        genre: "",
        publisher: "",
        // year: '',
        // cover: '',
        // length: '',
        // weight: '',
        // dimensions: '',
        price: "",
        isBargainAproppriate: false,
        description: "",
        // additional: '',
      },
      // validationSchema: schema,
      onSubmit,
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputAddBookForm
          name={"title"}
          label={"Book Title"}
          placeholder={"Provide the accurate book title |"}
          onChange={handleChange}
        />
        <InputAddBookForm label={"Choose book language"}>
          <LanguageBox>
            <LanguageInput
              name='language'
              defaultValue={"En"}
              onClick={handleChange}
              focused={`${focusedEn}`}
            />
            <LanguageInput
              name='language'
              defaultValue={"Uk"}
              onClick={handleChange}
              focused={`${focusedUk}`}
            />
            <LanguageInput
              name='language'
              defaultValue={"Ua"}
              onClick={handleChange}
              focused={`${focusedUa}`}
            />
            <input />
          </LanguageBox>
        </InputAddBookForm>
        <InputAddBookForm
          name={"author"}
          label={"Author(s) name(s)"}
          placeholder={"Provide the accurate author(s) name(s) |"}
          onChange={handleChange}
        />

        <InputAddBookForm
          name={"publisher"}
          label={"Publisher"}
          placeholder={"Provide publisher house name |"}
          onChange={handleChange}
        />
        <button type='submit'>submit</button>
        {/* <ul>
          <li>
            <label htmlFor="title">
              Book Title
              <span
                style={{
                  marginLeft: 2,
                  color: 'var(--error-color)',
                }}
              >
                *
              </span>
            </label>
            <input
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="title"
              id="title"
              placeholder="Provide the accurate book title"
            />
          </li>
          <li>
            <label>Select the action to be performed</label>
            <label>
              <input type="radio" name="performed" value="sale" />
              Sale
            </label>
            <label>
              <input type="radio" name="performed" value="exchange" />
              Exchange
            </label>
            <label>
              <input type="radio" name="performed" value="donate" />
              Donate
            </label>
          </li>
          <li>
            <label>Specify the state of book</label>
            <label>
              <input type="radio" name="state" value="new" />
              New
            </label>
            <label>
              <input type="radio" name="state" value="used" />
              Used
            </label>
          </li>
          <li>
            <label htmlFor="author">Author(s) name(s)</label>
            <input
              value={values.author}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="author"
              id="author"
              placeholder="Provide the accurate author(s) name(s)"
            />
          </li>
          <li>
            <label>Choose book language</label>
            <label>
              <input type="radio" name="language" value="en" />
              En
            </label>
            <label>
              <input type="radio" name="language" value="ua" />
              Ua
            </label>
          </li>
          <li>
            <label htmlFor="ISBN">ISBN (ASIN)</label>
            <input
              value={values.ISBN}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              name="ISBN"
              id="ISBN"
              placeholder="Provide digital unique identifier"
            />
          </li>
          <li>
            <label>Choose book format</label>
            <label>
              <input type="radio" name="format" value="paper" />
              Paper
            </label>
            <label>
              <input type="radio" name="format" value="e-book" />
              E-book
            </label>
            <label>
              <input type="radio" name="format" value="audio" />
              Audio-book
            </label>
          </li>
          <li>
            <label htmlFor="genre">Define most suitable genre</label>
            <input
              value={values.genre}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="genre"
              id="genre"
            />
          </li>
          <li>
            <label htmlFor="publisher">Publisher</label>
            <input
              value={values.publisher}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              name="publisher"
              id="publisher"
              placeholder="Provide publisher house name"
            />
          </li>
          <li>
            <label htmlFor="year">Publication date</label>
            <input
              value={values.year}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              name="year"
              id="year"
              placeholder="Provide the year of publication"
            />
          </li>
          <li>
            <label>Specify the type of book cover</label>
            <label>
              <input type="radio" name="cover" value="soft" />
              Soft
            </label>
            <label>
              <input type="radio" name="cover" value="hard" />
              Hard
            </label>
            <label>
              <input type="radio" name="cover" value="gift" />
              Gift
            </label>
          </li>
          <li>
            <label>
              Print Length
              <input
                value={values.length}
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                name="length"
                placeholder="000 pages"
              />
            </label>
            <label>
              Weight
              <input
                value={values.weight}
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                name="weight"
                placeholder="000.00 kg"
              />
            </label>
            <label>
              Dimensions
              <input
                value={values.dimensions}
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                name="dimensions"
                placeholder="00-00-00 sm"
              />
            </label>
          </li>
          <li>
            <label htmlFor="price">Enter your selling price</label>
            <input
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              name="price"
              id="price"
              placeholder="0000.00"
            />
          </li>
        </ul> */}
      </form>
    </>
  );
}
