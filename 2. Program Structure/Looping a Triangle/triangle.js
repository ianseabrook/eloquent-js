/*
Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
var hash = "#";

do {
  console.log(hash);
  hash += "#";
} while (hash.length <= 6);
