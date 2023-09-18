import { useState } from "react";
import Image from "next/image";
import InputAddBookForm from "./InputAddBookForm/InputAddBookForm";
import {
  LanguageBox,
  LanguageInput,
  SelectLangInput,
  FormatBox,
  Format,
  FormatInput,
  PaperSvgStyled,
  EBookSvgStyled,
  AudioSvgStyled,
  GenreBox,
  GenreInput,
  SelectListMenu,
  SelectGenreText,
  SelectGenreBtn,
  GenreList,
  GenreItem,
  Textarea,
  PriceBox,
  PriceDollar,
  PriceInput,
  PriceInputBox,
  BargainBox,
  BargainText,
  CancelBtn,
  PhotosBox,
  PhotoItemBox,
  PhotoInputBox,
  RemovePhotosBtn,
} from "./AddBookForm.styled";
import { Search } from "../../../../../public/svg-index";
import { ArrowDown } from "../../../../../public/svg-account";
import { Popover, Checkbox } from "@mui/material";
import SecondaryButton from "@/components/secondaryButton/SecondaryButton";
import {
  CheckboxEmpty,
  CheckboxChecked,
} from "../../../../../public/svg-authorization";
import {
  CancelTrash,
  Clip,
  PlusCircle,
} from "../../../../../public/svg-account";
import { InputHidden } from "../../Settings/Settings.styled";
import { BannerBestsellers } from "../../../../../public/png/banners"; // for test

const FormDataInitValues = {
  title: "",
  author: "",
  language: "En",
  format: "Paper",
  genre: "Fiction",
  publisher: "",
  price: "",
  bargain: true,
  photos: [],
  description: "",
};
export default function AddBookForm() {
  const [formData, setFormData] = useState(FormDataInitValues);
  const [selectedLang, setSelectedLang] = useState({
    en: true,
    ua: false,
    other: false,
  });
  const [selectedFormat, setSelectedFormat] = useState({
    paper: true,
    eBook: false,
    audio: false,
  });
  const [anchorEl, setAnchorEl] = useState({ language: null, genre: null });
  // const [photos, setPhotos] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    if (name === "language") {
      switch (value) {
        case "En":
          setSelectedLang({ en: true, ua: false, other: false });
          break;
        case "Ua":
          setSelectedLang({ en: false, ua: true, other: false });
          break;

        default:
          break;
      }
    }

    if (name === "format") {
      switch (value) {
        case "Paper":
          setSelectedFormat({ paper: true, eBook: false, audio: false });
          break;
        case "E-book":
          setSelectedFormat({ paper: false, eBook: true, audio: false });
          break;
        case "Audio-book":
          setSelectedFormat({ paper: false, eBook: false, audio: true });
          break;

        default:
          break;
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const openPopover = (e) => {
    if (e.currentTarget.id) {
      setSelectedLang({ en: false, ua: false, other: true });
      setAnchorEl({ ...anchorEl, language: e.target });
    } else {
      setAnchorEl({ ...anchorEl, genre: e.target });
    }
  };
  const closePopover = () => {
    setAnchorEl({ genre: null, language: null });
  };

  const openLang = Boolean(anchorEl.language);
  const openGenre = Boolean(anchorEl.genre);
  const id = openGenre || openLang ? "simple-popover" : undefined;

  const AddSelectInputText = (e) => {
    const { id } = e.currentTarget;
    const { textContent } = e.target;
    if (id) {
      setFormData({ ...formData, language: textContent });
    } else {
      setFormData({ ...formData, genre: textContent });
    }

    setTimeout(() => {
      closePopover();
    }, 150);
  };

  const handlePrice = (e) => {
    const { value } = e.target;
    if (value.length > 7) {
      return;
    }

    setFormData({ ...formData, price: value });
  };

  const handleChangePhoto = (e) => {
    const { name, files, id } = e.target;
    // setPhotos([ ...photos, { [name]: window.URL.createObjectURL(files[0]) }])
    setFormData({
      ...formData,
      photos: [
        ...formData.photos,
        {id, [name]: window.URL.createObjectURL(files[0])},
      ],
    });
  };
  const removePhotos = (e) => {
    // console.dir(e.target.id);

    setFormData({
      ...formData,
      photos: [],
    });

    // setFormData({
    //   ...formData,
    //   photos: 
    //     formData.photos.splice(e.target.id, 1)
    //   ,
    // });
  }

  const resetForm = () => {
    setFormData(FormDataInitValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    // const formFile = new FormData();
    // formFile.append("avatar", photo); // "avatar" это свойство картинки в БД на бекенде, нужно узнать как будет называться это поле.

    //dispatch(addBookData(formData)) photos:FormFile
  };
  // const onSubmit = (values, actions) => {
  //   alert(JSON.stringify(values, null, 2));
  //   actions.resetForm();
  // };

  // const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  //   useFormik({
  //     initialValues: {
  //       title: "",
  //       // performed: '',
  //       // state: '',
  //       // confirm: '',
  //       author: "",
  //       language: "",
  //       // ISBN: '',
  //       format: "",
  //       genre: "",
  //       publisher: "",
  //       // year: '',
  //       // cover: '',
  //       // length: '',
  //       // weight: '',
  //       // dimensions: '',
  //       price: "",
  //       isBargainAproppriate: false,
  //       description: "",
  //       // additional: '',
  //     },
  //     // validationSchema: schema,
  //     onSubmit,
  //   });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputAddBookForm
          name={"title"}
          label={"Book Title"}
          placeholder={"Provide the accurate book title |"}
          value={formData.title}
          onChange={handleChange}
        />
        <InputAddBookForm
          name={"author"}
          label={"Author(s) name(s)"}
          placeholder={"Provide the accurate author(s) name(s) |"}
          value={formData.author}
          onChange={handleChange}
        />
        <InputAddBookForm label={"Choose book language"}>
          <LanguageBox>
            <LanguageInput
              name='language'
              defaultValue={"En"}
              defaultChecked
              onClick={handleChange}
              selectedlang={`${selectedLang.en}`}
              readOnly
            />
            <LanguageInput
              name='language'
              defaultValue={"Ua"}
              onClick={handleChange}
              selectedlang={`${selectedLang.ua}`}
              readOnly
            />
            <SelectListMenu selectmenu='language'>
              <SelectLangInput
                name={"language"}
                placeholder='choose other'
                selectedlang={`${selectedLang.other}`}
                value={
                  formData.language !== "Ua" && formData.language !== "En"
                    ? formData.language
                    : ""
                }
                readOnly
              />
              <SelectGenreBtn
                id='languageBtn'
                type='button'
                onClick={openPopover}
              >
                <Search style={{ width: "24px", height: "24px" }} />
              </SelectGenreBtn>
            </SelectListMenu>
            <Popover
              id={id}
              open={openLang}
              anchorEl={anchorEl.language}
              onClose={closePopover}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{ marginTop: "5px" }}
              marginThreshold={27}
            >
              <GenreList id='languageSelect' onClick={AddSelectInputText}>
                <GenreItem>De</GenreItem>
                <GenreItem>Fr</GenreItem>
                <GenreItem>Ja</GenreItem>
                <GenreItem>other</GenreItem>
              </GenreList>
            </Popover>
          </LanguageBox>
        </InputAddBookForm>

        <InputAddBookForm label='Choose book format'>
          <FormatBox>
            <Format selectedformat={`${selectedFormat.paper}`}>
              <PaperSvgStyled selectedformat={`${selectedFormat.paper}`} />
              <FormatInput
                name='format'
                onClick={handleChange}
                type='text'
                defaultValue='Paper'
                selectedformat={`${selectedFormat.paper}`}
                style={{ width: "48px" }}
              />
            </Format>
            <Format selectedformat={`${selectedFormat.eBook}`}>
              <EBookSvgStyled selectedformat={`${selectedFormat.eBook}`} />
              <FormatInput
                name='format'
                onClick={handleChange}
                type='text'
                defaultValue='E-book'
                selectedformat={`${selectedFormat.eBook}`}
                style={{ width: "55px" }}
              />
            </Format>
            <Format selectedformat={`${selectedFormat.audio}`}>
              <AudioSvgStyled selectedformat={`${selectedFormat.audio}`} />
              <FormatInput
                name='format'
                onClick={handleChange}
                type='text'
                defaultValue='Audio-book'
                selectedformat={`${selectedFormat.audio}`}
                style={{ width: "85px" }}
              />
            </Format>
          </FormatBox>
        </InputAddBookForm>
        <InputAddBookForm name={"genre"} label={"Define most suitable genre"}>
          <GenreBox>
            <GenreInput name='genre' value={formData.genre} readOnly />
            <SelectListMenu>
              <SelectGenreText>select from list</SelectGenreText>
              <SelectGenreBtn type='button' onClick={openPopover}>
                <ArrowDown style={{ width: "15px", height: "15px" }} />
              </SelectGenreBtn>
            </SelectListMenu>
            <Popover
              id={id}
              open={openGenre}
              anchorEl={anchorEl.genre}
              elevation={20}
              onClose={closePopover}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{ marginTop: "5px" }}
            >
              <GenreList name='genre' onClick={AddSelectInputText}>
                <GenreItem>Arts & Architecture</GenreItem>
                <GenreItem>Biography & Memoir</GenreItem>
                <GenreItem>Body, Mind, Spirit</GenreItem>
                <GenreItem>Business</GenreItem>
                <GenreItem>Children&#039;s</GenreItem>
                <GenreItem>Computer & Technology</GenreItem>
                <GenreItem>Education</GenreItem>
                <GenreItem menutype='submenu'>History</GenreItem>
                <GenreItem menutype='submenu'>Medical & Nursing</GenreItem>
                <GenreItem menutype='submenu'>Political Science</GenreItem>
                <GenreItem menutype='submenu'>Psychology &Religion</GenreItem>
                <GenreItem menutype='submenu'>Social Science</GenreItem>
                <GenreItem menutype='submenu'>Textbooks</GenreItem>
                <GenreItem>Fiction</GenreItem>
                <GenreItem menutype='submenu'>Horror</GenreItem>
                <GenreItem menutype='submenu'>Mystery & Thrillers</GenreItem>
                <GenreItem menutype='submenu'>Poetry</GenreItem>
                <GenreItem menutype='submenu'>Romance</GenreItem>
                <GenreItem menutype='submenu'>Science Fiction</GenreItem>
                <GenreItem menutype='submenu'>True Crime</GenreItem>
              </GenreList>
            </Popover>
          </GenreBox>
        </InputAddBookForm>
        <InputAddBookForm
          name={"publisher"}
          label={"Publisher"}
          placeholder={"Provide publisher house name |"}
          value={formData.publisher}
          onChange={handleChange}
        />
        <InputAddBookForm name='price' label='Enter your selling price'>
          <PriceBox>
            <PriceInputBox>
              <PriceDollar>$</PriceDollar>
              <PriceInput
                name='price'
                type='number'
                value={formData.price}
                placeholder='0000.00'
                onChange={handlePrice}
              />
            </PriceInputBox>
            <BargainBox>
              <BargainText>bargaining is appropriate</BargainText>
              <Checkbox
                icon={
                  <CheckboxEmpty style={{ width: "24px", height: "24px" }} />
                }
                checkedIcon={
                  <CheckboxChecked style={{ width: "24px", height: "24px" }} />
                }
                checked={formData.bargain}
                onChange={() =>
                  setFormData({ ...formData, bargain: !formData.bargain })
                }
              />
            </BargainBox>
          </PriceBox>
        </InputAddBookForm>
        <InputAddBookForm
          name='photos'
          label='Add images / optimal size 1200x900'
        >
          <PhotosBox>
            <PhotoItemBox>
              {formData.photos[0] ? (
                <Image
                  src={
                    formData.photos[0]
                      ? `${formData.photos[0].photo1}`
                      : BannerBestsellers
                  }
                  alt='book photo'
                  style={{
                    borderRadius: "16px",
                    width: "78px",
                    minHeight: "89px",
                    border: "1px solid",
                  }}
                  width={78}
                  height={90}
                />
              ) : (
                <PhotoInputBox>
                  <Clip style={{ width: "24px", height: "24px" }} />
                  Upload a file
                  <InputHidden
                    id={0}
                    type='file'
                    name='photo1'
                    placeholder='Upload a photo'
                    accept='image/png, image/jpeg'
                    onChange={handleChangePhoto}
                  />
                </PhotoInputBox>
              )}
            </PhotoItemBox>
            <PhotoItemBox>
              {formData.photos[1] ? (<Image
                src={
                  formData.photos[1]
                    ? `${formData.photos[1].photo2}`
                    : BannerBestsellers
                }
                alt='book photo'
                style={{
                  borderRadius: "16px",
                  width: "78px",
                  minHeight: "89px",
                  border: "1px solid",
                }}
                width={78}
                height={90}
              />) : (<PhotoInputBox>
                {formData.photos[0] ? (
                  <>
                    <Clip style={{ width: "24px", height: "24px" }} />
                    Upload a file
                    <InputHidden
                      id={1}
                      type='file'
                      name='photo2'
                      placeholder='Upload a photo'
                      accept='image/png, image/jpeg'
                      onChange={handleChangePhoto}
                    />
                  </>
                ) : (
                  <PlusCircle style={{ width: "24px", height: "24px" }} />
                )}
              </PhotoInputBox>)}
            </PhotoItemBox>
            <PhotoItemBox>
              {formData.photos[2] ? (<Image
                src={
                  formData.photos[2]
                    ? `${formData.photos[2].photo3}`
                    : BannerBestsellers
                }
                alt='book photo'
                style={{
                  borderRadius: "16px",
                  width: "78px",
                  minHeight: "89px",
                  border: "1px solid",
                }}
                width={78}
                height={90}
                onClick={removePhotos}
              />) : (
                <PhotoInputBox>
                  {formData.photos[1] ? (
                    <>
                      <Clip style={{ width: "24px", height: "24px" }} />
                      Upload a file
                      <InputHidden
                        id={2}
                        type='file'
                        name='photo3'
                        placeholder='Upload a photo'
                        accept='image/png, image/jpeg'
                        onChange={handleChangePhoto}
                      />
                    </>
                  ) : (
                    <PlusCircle style={{ width: "24px", height: "24px" }} />
                  )}
                </PhotoInputBox>
              )}
            </PhotoItemBox>
            <PhotoItemBox>
              {formData.photos[3] ? (<Image
                src={
                  formData.photos[3]
                    ? `${formData.photos[3].photo4}`
                    : BannerBestsellers
                }
                alt='book photo'
                style={{
                  borderRadius: "16px",
                  width: "78px",
                  minHeight: "89px",
                  border: "1px solid",
                }}
                width={78}
                height={90}
              />) : (<PhotoInputBox>
                {formData.photos[2] ? (
                  <>
                    <Clip style={{ width: "24px", height: "24px" }} />
                    Upload a file
                    <InputHidden
                      id={3}
                      type='file'
                      name='photo4'
                      placeholder='Upload a photo'
                      accept='image/png, image/jpeg'
                      onChange={handleChangePhoto}
                    />
                  </>
                ) : (
                  <PlusCircle style={{ width: "24px", height: "24px" }} />
                )}
              </PhotoInputBox>)}
            </PhotoItemBox>
            <RemovePhotosBtn type="button" onClick={removePhotos}>Remove photos (test)</RemovePhotosBtn>
          </PhotosBox>
        </InputAddBookForm>
        <InputAddBookForm name={"description"} label={"Add book description"}>
          <Textarea
            name='description'
            rows='6'
            placeholder={
              "Please briefly summarize the book's content. The author's annotation can also be included in your write-up if available."
            }
            value={formData.description}
            onChange={handleChange}
          />
          {/* </Textarea> */}
        </InputAddBookForm>
        <CancelBtn type='button' onClick={resetForm}>
          <CancelTrash style={{ width: "24px", height: "24px" }} />
          Cancel
        </CancelBtn>
        <SecondaryButton
          type='submit'
          text='Publish'
          style={{ width: "342px" }}
        />
      </form>
    </>
  );
}
