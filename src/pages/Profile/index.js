import React from "react";
import PropTypes from "prop-types";
import ProfileCard from "../../components/profile/index";
import Timeline from '../../components/timeline/index'

function ProfileView() {
    return (
        <div>
            <ProfileCard
                name="Mauricio Carvalho Cogo"
                campus="IFFar SVS"
                avatar="https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01.jpg?w=2560&h=1920"
                evaluator={true}
            />
            <Timeline />
        </div>
    );
}

ProfileView.propTypes = {
    title: PropTypes.string,
};

ProfileView.defaultProps = {
    title: "",
};

export default ProfileView;
