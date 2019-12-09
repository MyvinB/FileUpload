export MYSQL_DATABASE=db_fse_movie
export MYSQL_USER=fsemovieuser
export MYSQL_PASSWORD=FsePassword
if [[ -z "${MYSQL_CI_URL}" ]]; then
export MYSQL_CI_URL=jdbc:mysql://localhost:3306/db_fse_movie
fi
