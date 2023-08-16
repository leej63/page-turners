import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk} from "../services/auth-thunks";
import Nav from "../../nav";


function ProfileScreen() {
    const { currentUser } = useSelector((state) => state.user);
    const [ profile, setProfile ] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = async () => {
        await dispatch(updateUserThunk(profile));
        alert("Profile updated");
    };
    useEffect(() => {
        const loadProfile = async () => {
            const { payload } = await dispatch(profileThunk());
            setProfile(payload);
        };
        loadProfile();
    }, []);
    return (
        <div>
        <Nav/>
        {profile && (
          <div>
            <h1>Profile Screen</h1>
            <div className="mt-2">
              <span>Username: {profile.username}</span><br/>
              <span>First Name: {profile.firstName}</span><br/>
              <span>Last Name: {profile.lastName}</span><br/>
            </div>
            <div>
              <div className="mt-2">
                <label className="form-label">First Name</label>
                <input className="form-control" type="text" value={profile.firstName}
                  onChange={(event) => {
                    const newProfile = {
                      ...profile, firstName: event.target.value,
                    };
                    setProfile(newProfile);
                }}/>
              </div>
              <div className="mt-2">
                <label className="form-label">Last Name</label>
                <input className="form-control" type="text" value={profile.lastName}
                  onChange={(event) => {
                    const newProfile = {
                      ...profile, lastName: event.target.value,
                    };
                    setProfile(newProfile);
                }}/>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <button className="m-1 btn btn-primary"
                  onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/tuiter/login");}}>
                  Logout
                </button>
              </div>
              <br/>
              <div>
                <button className="m-1 btn btn-primary" onClick={save}>
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};
export default ProfileScreen;