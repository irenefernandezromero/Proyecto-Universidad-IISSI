from silence.decorators import endpoint

@endpoint(
    route="/valorations",
    method="GET",
    sql="SELECT * FROM Valorations"
)
def get_all():
    pass


#################################################################################

@endpoint(
    route="/valorations/$valorationId",
    method="GET",
    sql="SELECT * FROM Valorations WHERE valorationId = $valorationId"
)
def get_by_id():
    pass
#################################################################################


@endpoint(
    route="/valorations",
    method="POST",
    sql="INSERT INTO Valorations (valorationId, photoId, userId, date, value) VALUES ($valorationId, $photoId, $userId, $date, $value)",
    description="Creates a new valoration",
)
def create(valorationId, photoId, userId, date, value):
    pass

##############################################################################´

@endpoint(
    route="/valoration/$photoId",
    method="GET",
    sql="SELECT AVG(value) FROM Valorations WHERE photoId = $photoId"
)
def get_avg():
    pass