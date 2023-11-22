function skillsMember() {
    var skills = [];
    var skills = document.getElementById('skills').value;
    var skills = skills.split(',');
    var skills = skills.map(function (skill) {
        return skill.trim();
    });
    var skills = skills.filter(function (skill) {
        return skill.length > 0;
    });
    return skills;
}