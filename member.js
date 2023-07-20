function skillsMember()
{
    var member = document.getElementById("member").value;
    var skills = document.getElementById("skills").value;
    var skillsMember = document.getElementById("skillsMember").value;
    var skillsMember = skillsMember + member + " - " + skills + "\n";
    document.getElementById("skillsMember").value = skillsMember;
}