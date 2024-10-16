from silence.decorators import endpoint

@endpoint(
    route="/comments",
    method="GET",
    sql="SELECT * FROM Comments"
)
def get_all():
    pass


#################################################################################

@endpoint(
    route="/comments/$commentId",
    method="GET",
    sql="SELECT * FROM Comments WHERE commentId = $commentId"
)
def get_by_id():
    pass
#################################################################################

@endpoint(
    route="/comments",
    method="POST",
    sql="INSERT INTO Comments (comment, photoId, userId) VALUES ($comment, $photoId, $userId)",
    description="Creates a new comment",
    auth_required=True,
)
def create(comment, photoId, userId):
    pass

##################################################################################

@endpoint(
    route="/comments/$commentId",
    method="DELETE",
    sql="DELETE FROM Comments WHERE commentId = $commentId",
    description="Removes a comment",
)
def delete():
    pass



@endpoint(
    route="/comment/$photoId",
    method="GET",
    sql="SELECT * FROM Comments WHERE photoId = $photoId"
)
def get_by_id():
    pass
