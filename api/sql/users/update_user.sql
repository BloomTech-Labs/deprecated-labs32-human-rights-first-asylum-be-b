UPDATE users 
SET firstName=$2, 
		lastName=$3, 
		password=$4, 
		email=$5, 
		permissions_flag=$6
WHERE id=$1
RETURNING id;