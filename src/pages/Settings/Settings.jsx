import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import setingsPage from '../../images/images/setings-page-png.png';
import {
  AvaImg,
  BannerThumb,
  ButtonContainer,
  CancelButton,
  DownloadPhoto,
  ErrorMsg,
  FileContainer,
  FormFormik,
  FormGroup,
  FormGroupLabel,
  Input,
  Label,
  SaveButton,
  Thumb,
  TitlePage,
  WrapperRadioButton,
  ProfileContainer,
} from './Settings.styled';
import { Formik } from 'formik';
import * as yup from 'yup';
import RadioButton from 'components/RadioButton/RadioButton';
import avatar from '../../images/svgIcon/profile-circle.svg';
import downloadPhoto from '../../images/svgIcon/download-new-photo.svg';
const ValidationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters long.')
    .max(50, 'Name must be no more than 50 characters.')
    .required('Name is required')
    .trim('Name cannot include leading and trailing spaces')
    .strict(true),
  age: yup
    .number()
    .min(14, 'Age must be at least 14 years old')
    .max(110, 'Age must be no more than 110 years old')
    .required('Age is required')
    .integer('Age must be an integer'),
  height: yup
    .number()
    .min(120, 'Height must be at least 120cm')
    .max(220, 'Height must be no more than 220cm')
    .required('Height is required')
    .integer('Height must be an integer'),
  weight: yup
    .number()
    .min(40, 'Weight must be at least 40kg')
    .max(200, 'Weight must be no more than 200kg')
    .required('Weight is required')
    .test('maxDigitsAfterDecimal', 'Must have 1 digits after decimal', number =>
      /^\d+(\.\d{1})?$/.test(number)
    ),
});
const SettingsPage = () => {
  const initialValues = {
    name: '',
    photo: '',
    age: 0,
    gender: '',
    height: 0,
    weight: 0,
    activity: '',
  };

  return (
    <Section>
      <Container>
        <TitlePage>Profile setting</TitlePage>
        <ProfileContainer>
          <BannerThumb>
            <img src={setingsPage} alt="setings-page"></img>
          </BannerThumb>
          <Formik
            initialValues={initialValues}
            onSubmit={values => {
              console.log(values);
            }}
            validationSchema={ValidationSchema}
          >
            {({ values }) => (
              <FormFormik>
                <Label>
                  Your name
                  <Input
                    name="name"
                    placeholder="Enter your name"
                    type="text"
                    required
                  />
                  <ErrorMsg name="namel" component="div" />
                </Label>
                <FileContainer>
                  Your photo
                  <Input name="photo" type="file" id="photo" accept="image/*" />
                  <Label htmlFor="photo">
                    <Thumb>
                      <AvaImg src={avatar} alt="userAvatar" />
                    </Thumb>
                    <DownloadPhoto>
                      <img src={downloadPhoto} alt="Select File" />
                      Download new photo
                    </DownloadPhoto>
                  </Label>
                </FileContainer>

                <Label>
                  Your age
                  <Input
                    name="age"
                    type="number"
                    placeholder="Enter your age"
                    required
                  />
                  <ErrorMsg name="age" component="div" />
                </Label>

                <FormGroup role="group" aria-labelledby="gender-head">
                  <FormGroupLabel id="gender-head">Gender</FormGroupLabel>
                  <WrapperRadioButton>
                    <RadioButton
                      name="gender"
                      value="Male"
                      selectedValue={values.gender}
                      text="Male"
                    />
                    <RadioButton
                      name="gender"
                      value="Female"
                      selectedValue={values.gender}
                      text="Female"
                    />
                  </WrapperRadioButton>
                </FormGroup>
                <Label>
                  Height
                  <Input
                    name="height"
                    type="number"
                    placeholder="Enter your height"
                    required
                  />
                  <ErrorMsg name="height" component="div" />
                </Label>
                <Label>
                  Weight
                  <Input
                    name="weight"
                    type="number"
                    placeholder="Enter your weight"
                    required
                  />
                  <ErrorMsg name="weight" component="div" />
                </Label>
                <FormGroup role="group" aria-labelledby="activity-head">
                  <FormGroupLabel id="activity-head">
                    Your activity
                  </FormGroupLabel>
                  <RadioButton
                    name="activity"
                    value="1.2"
                    selectedValue={values.activity}
                    text="1.2 - if you do not have physical activity and sedentary work"
                  />
                  <RadioButton
                    name="activity"
                    value="1.375"
                    selectedValue={values.activity}
                    text="1,375 - if you do short runs or light gymnastics 1-3 times a week"
                  />
                  <RadioButton
                    name="activity"
                    value="1.55"
                    selectedValue={values.activity}
                    text="1.55 - if you play sports with average loads 3-5 times a week"
                  />
                  <RadioButton
                    name="activity"
                    value="1.725"
                    selectedValue={values.activity}
                    text="1,725 - if you train fully 6-7 times a week"
                  />
                  <RadioButton
                    name="activity"
                    value="1.9"
                    selectedValue={values.activity}
                    text="1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"
                  />
                </FormGroup>
                <ButtonContainer>
                  <SaveButton type="submit">Save</SaveButton>
                  <CancelButton type="button">Cancel</CancelButton>
                </ButtonContainer>
              </FormFormik>
            )}
          </Formik>
        </ProfileContainer>
      </Container>
    </Section>
  );
};

export default SettingsPage;
