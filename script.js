function generate_page_content() {
    var time_offset = (1000 * 60 * 60 * 24) * 4
    var week = Math.floor((Date.now() - time_offset) / (1000 * 60 * 60 * 24 * 7)) //ms * s * min * hr * days = weeks
    var adj_word = adj[week % adj.length]
    var noun_word = noun[week % noun.length]
    document.getElementById("content").innerHTML = "<p class = \"text fade_in\">" +
    adj_word + " " + noun_word +
    "</p>"
}

function random_pair() {
    var rnd = Math.floor(Math.random() * 5000)
    var adj_word = adj[rnd % adj.length]
    var noun_word = noun[rnd % noun.length]
    document.getElementById("content").innerHTML = "<p class = \"text fade_in\">" +
    adj_word + " " + noun_word +
    "</p>"
}