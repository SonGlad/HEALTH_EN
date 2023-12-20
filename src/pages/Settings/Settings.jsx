import { Section } from "components/Section/Section";
import { Container } from "components/Container/Container";
import setingsPage from "../../images/images/setings-page-png.png";
import { TitlePage, ProfileContainer } from "./Settings.styled";
import { useFormik } from "formik";
import RadioButton from "components/RadioButton/RadioButton";
import avatar from "../../images/svgIcon/profile-circle.svg";
import downloadPhoto from "../../images/svgIcon/download-new-photo.svg";
import { ValidationSchema } from "../../utils/validationSchemas";
import { ShowRules } from "utils/showRules";

const SettingsPage = () => {
  const {
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      photo: "",
      age: "",
      gender: "",
      height: "",
      weight: "",
      activity: "",
      newPassword: "",
      confirmPassword: "",
    },

    validationSchema: ValidationSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const {
    showPassword,
    getInputClass,
    getInputAlert,
    getHidePassword,
  } = ShowRules(values, touched, errors);

  return (
    <Section>
      <Container>
        <TitlePage>Profile setting</TitlePage>
        <ProfileContainer>
          <div className="BannerThumb">
            <img src={setingsPage} alt="setings-page"></img>
          </div>
          <form className="FormFormik" onSubmit={handleSubmit}>
            <label className="Label">
              Your name
              <input
                className={getInputClass("name")}
                id="name"
                name="name"
                placeholder="Enter your name"
                type="text"
                onChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
                required
              />
              {getInputAlert("name")}
            </label>
            <div className="FileContainer">
              Your photo
              <input
                className="Input"
                name="photo"
                type="file"
                id="photo"
                accept="image/*"
                onChange={handleChange}
                value={values.photo}
                onBlur={handleBlur}
              />
              <label className="Label" htmlFor="photo">
                <div className="Thumb">
                  <img className="AvaImg" src={avatar} alt="userAvatar" />
                </div>
                <div className="DownloadPhoto">
                  <img src={downloadPhoto} alt="Select File" />
                  Download new photo
                </div>
              </label>
            </div>
            <label className="Label">
              Your age
              <input
                className={getInputClass("age")}
                name="age"
                type="number"
                placeholder="Enter your age"
                onChange={handleChange}
                value={values.age}
                onBlur={handleBlur}
                required
              />
              {getInputAlert("age")}
            </label>
            <div
              className="FormGroup"
              role="group"
              aria-labelledby="gender-head"
            >
              <p className="FormGroupLabel" id="gender-head">
                Gender
              </p>
              <div className="WrapperRadioButton">
                <RadioButton
                  id="Male"
                  name="gender"
                  value="Male"
                  selectedValue={values.gender}
                  text="Male"
                  onPush={handleChange}
                  onBlure={handleBlur}
                />
                <RadioButton
                  id="Female"
                  name="gender"
                  value="Female"
                  selectedValue={values.gender}
                  onPush={handleChange}
                  onBlure={handleBlur}
                  text="Female"
                />
              </div>
            </div>
            <label className="Label">
              Height
              <input
                className={getInputClass("height")}
                name="height"
                type="number"
                placeholder="Enter your height"
                onChange={handleChange}
                value={values.height}
                onBlur={handleBlur}
                required
              />
              {getInputAlert("height")}
            </label>
            <label className="Label">
              Weight
              <input
                className={getInputClass("weight")}
                name="weight"
                type="number"
                placeholder="Enter your weight"
                onChange={handleChange}
                value={values.weight}
                onBlur={handleBlur}
                required
              />
              {getInputAlert("weight")}
            </label>
            <label className="Label" id="password">
              New password
              <input
                className={getInputClass("newPassword")}
                name="newPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {getHidePassword()}
              {getInputAlert("newPassword")}
            </label>
            <label className="Label" id="password">
              Confirm password
              <input
                className={getInputClass("confirmPassword")}
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Duplicate password"
                value={values.confPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {getHidePassword()}
              {getInputAlert("confirmPassword")}
            </label>
            <div
              className="FormGroup"
              role="group"
              aria-labelledby="activity-head"
            >
              <p className="FormGroupLabel" id="activity-head">
                Your activity
              </p>
              <RadioButton
                name="activity"
                value="1.2"
                id="1.2"
                selectedValue={values.activity}
                text="1.2 - if you do not have physical activity and sedentary work"
                onPush={handleChange}
                onBlure={handleBlur}
              />
              <RadioButton
                name="activity"
                id="1.375"
                value="1.375"
                selectedValue={values.activity}
                text="1,375 - if you do short runs or light gymnastics 1-3 times a week"
                onPush={handleChange}
                onBlure={handleBlur}
              />
              <RadioButton
                name="activity"
                id="1.55"
                value="1.55"
                selectedValue={values.activity}
                text="1.55 - if you play sports with average loads 3-5 times a week"
                onPush={handleChange}
                onBlure={handleBlur}
              />
              <RadioButton
                name="activity"
                value="1.725"
                selectedValue={values.activity}
                text="1,725 - if you train fully 6-7 times a week"
                onPush={handleChange}
                onBlure={handleBlur}
              />
              <RadioButton
                name="activity"
                value="1.9"
                id="1.9"
                selectedValue={values.activity}
                text="1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"
                onPush={handleChange}
                onBlure={handleBlur}
              />
            </div>
            <div className="ButtonContainer">
              <button
                className="SaveButton"
                type="submit"
                disabled={!values.activity || !isValid}
              >
                Save
              </button>
              <button className="CancelButton" type="button">
                Cancel
              </button>
            </div>
          </form>
        </ProfileContainer>
      </Container>
    </Section>
  );
};

export default SettingsPage;
