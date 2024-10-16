from silence.decorators import endpoint

@endpoint(
    route="/photos",
    method="GET",
    sql="SELECT * FROM Photos ",
    description="Returns the list of all photos in the system",
)
def get_all():
    pass


#################################################################################

@endpoint(
    route="/photos/$photoId",
    method="GET",
    sql="SELECT * FROM Photos WHERE photoId = $photoId"
)
def get_by_id():
    pass
#################################################################################


@endpoint(
    route="/photos",
    method="POST",
    sql="INSERT INTO Photos (photoId, title, description, url, visibility, userId) VALUES ($photoId, $title, $description, $url, $visibility, $userId)",
    description="Creates a new photo",
)
def create(photoId, title, description, url, visibility, userId):
    pass

##################################################################################

@endpoint(
    route="/photos/$photoId",
    method="PUT",
    sql="UPDATE Photos SET title = $title, description = $description, url =$url, visibility = $visibility, userId=$userId WHERE photoId = $photoId",
    description="Updates an existing photo",
)
def update(title, description, url, visibility, userId):
    pass



##################################################################################
@endpoint(
    route="/photos/$photoId",
    method="DELETE",
    sql="DELETE FROM Photos WHERE photoId = $photoId",
    description="Removes a photo",
)
def delete():
    pass


@endpoint(
    route="/photo/$userId",
    method="GET",
    sql="SELECT * FROM Photos WHERE userId = $userId",
    description="Returns one photo by its userId",
)
def get_by_user_id():
    pass