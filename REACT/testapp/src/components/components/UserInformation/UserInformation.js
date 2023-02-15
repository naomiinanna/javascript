function UserInformation() {

    const user = {
        name: "MyName",
        profilePicture: "logo.svg",
        bio: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    }

    return (
        <div className="UserInformation">
            <h1>User Information</h1>
            <ul>
                <li>{user.name}</li>
                <li>{user.profilePicture}</li>
                <li>{user.bio}</li>
            </ul>

        </div>
    )
}

export default UserInformation;