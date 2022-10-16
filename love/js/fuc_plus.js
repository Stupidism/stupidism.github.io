function func_delete_code(parent_ele) {
  //var list = parent_ele.childNodes;
  var ele = document.getElementById("new_code");
  parent_ele.removeChild(ele);
}

function createLineFromArray(arr) {
  create_placeholder(new_code);

  arr.forEach(({ str, type }) => {
    create_line(new_code, str, div_list, type);
  });

  create_br(new_code);
}

function createStatement({ object, target, func, target2, comment }) {
  if (comment) {
    createLineFromArray([
      {
        str: "// " + comment,
        type: "comments",
      },
    ]);
  }

  createLineFromArray([
    ...(object ? [{ str: object + ".", type: "normal" }] : []),
    { str: func, type: "function" },
    { str: "(", type: "keyword" },
    { str: target, type: /'.*'/.test(target) ? "string" : "normal" },
    ...(target2
      ? [
          {
            str: ", " + target2,
            type: /'.*'/.test(target2) ? "string" : "normal",
          },
        ]
      : []),
    { str: ")", type: "keyword" },
  ]);
}

function func_create_new_code(parent_ele, /*optional*/ div_list, display) {
  var new_code = document.createElement("div");

  new_code.id = "new_code";
  new_code.style["float"] = "left";
  new_code.style["width"] = "440px";
  new_code.style["height"] = "750px";

  if (display == false) {
    new_code.style["display"] = "none";
  }

  new_code.style["font-family"] =
    "Consolas, Monaco, Bitstream Vera Sans Mono, Courier New, sans-serif";

  parent_ele.insertBefore(new_code, parent_ele.childNodes[0]);

  //create new div and space_div

  //type: comments keyword string normal
  //create_space(new_code);
  //create_placeholder(new_code);
  //1
  createLineFromArray([{ str: "// Long long ago", type: "comments" }]);
  //2
  createLineFromArray([
    { str: "Girl", type: "keyword" },
    { str: " u = ", type: "normal" },
    { str: "new", type: "keyword" },
    { str: " Lone_Star", type: "function" },
    { str: "(", type: "keyword" },
    { str: '"Nuannuan"', type: "string" },
    { str: ", ", type: "normal" },
    { str: '"Warmest_Machine"', type: "string" },
    { str: ")", type: "keyword" },
    { str: ";", type: "normal" },
  ]);
  //3
  createLineFromArray([
    { str: "Boy", type: "keyword" },
    { str: " i = ", type: "normal" },
    { str: "new", type: "keyword" },
    { str: " Lone_Star", type: "function" },
    { str: "(", type: "keyword" },
    { str: '"Stupid"', type: "string" },
    { str: ", ", type: "normal" },
    { str: '"Coldest_Human"', type: "string" },
    { str: ")", type: "keyword" },
    { str: ";", type: "normal" },
  ]);
  create_br(new_code);

  //4
  createLineFromArray([
    {
      str: "// I pessimistically thought I will be alone forever...",
      type: "comments",
    },
  ]);
  createLineFromArray([
    { str: "i.", type: "normal" },
    { str: "expect", type: "function" },
    { str: "(", type: "keyword" },
    { str: "i", type: "normal" },
    { str: ")", type: "keyword" },
    { str: ".always.", type: "normal" },
    { str: "to_be_instance_of", type: "function" },
    { str: "(", type: "keyword" },
    { str: "Lone_Star", type: "normal" },
    { str: ")", type: "keyword" },
  ]);

  createStatement({
    comment: "until some day I tried to search for another lone star.",
    object: "i",
    func: "search",
    target: "Lone_Star",
  });

  create_br(new_code);

  //5
  createStatement({
    comment: "On 2022.08.28, I found your poster in Nine app.",
    object: "i",
    func: "find",
    target: "u.poster",
  });

  createStatement({
    comment: "I claimed she is the girl! I'm up!!!",
    object: "i",
    func: "claim",
    target: "u",
  });

  createStatement({
    comment: "You and I chated a lot since the very first day.",
    func: "chat",
    target: "u",
    target2: "i",
  });

  create_br(new_code);

  createStatement({
    comment: "I flew to Shenzhen 10 days later.",
    object: "i",
    func: "fly_to",
    target: "'Shenzhen'",
  });
  createStatement({
    comment: "You and I met in person but had a shitty dinner.",
    func: "meet",
    target: "u",
    target2: "i",
  });

  createStatement({
    comment: "I felt I like you, and I'm glad I told you.",
    object: "i",
    func: "like",
    target: "u",
  });

  createStatement({
    object: "i",
    func: "confess",
    target: "u",
  });

  createStatement({
    comment: "You and I spent harmony 10 days since then.",
    func: "happy",
    target: "u",
    target2: "i",
  });
  createStatement({
    comment: "You and I enjoyed the moon together.",
    func: "moon_admire",
    target: "u",
    target2: "i",
  });

  createStatement({
    comment: "The day I left Shenzhen, you agreed to be my GF.",
    object: "u",
    func: "accept",
    target: "i",
  });

  createLineFromArray([
    { str: "we = ", type: "normal" },
    { str: "new", type: "keyword" },
    { str: " Pair", type: "function" },
    { str: "(", type: "keyword" },
    { str: '"u"', type: "string" },
    { str: ", ", type: "normal" },
    { str: '"i"', type: "string" },
    { str: ")", type: "keyword" },
    { str: ";", type: "normal" },
  ]);
  create_br(new_code);

  createStatement({
    comment: "I moved to Shenzhen 1 month later.",
    object: "i",
    func: "move_to",
    target: "'Shenzhen'",
  });

  //   createStatement({
  //     comment: "You helped me a lot with the move.",
  //     object: "u",
  //     func: "help",
  //     target: "i",
  //   });

  //   createStatement({
  //     comment: "We enjoyed cooking for each other.",
  //     object: "u",
  //     func: "cook_for",
  //     target: "i",
  //   });

  //   createStatement({
  //     object: "i",
  //     func: "cook_for",
  //     target: "u",
  //   });

  createStatement({
    comment: "We enjoyed the beach together.",
    object: "we",
    func: "go_to",
    target: "'beach'",
  });

  createStatement({
    comment: "Sometimes, there were arguements between us.",
    object: "we",
    func: "argue",
    target: "'seriously'",
  });

  createStatement({
    comment: "But we are getting more and more in harmony together.",
    object: "we",
    func: "in",
    target: "'harmony'",
  });

  createStatement({
    comment: "I love you and gracefully you love me.",
    object: "i",
    func: "love",
    target: "u",
  });
  createStatement({
    object: "u",
    func: "love",
    target: "i",
  });

  create_br(new_code);

  createLineFromArray([
    {
      str: "// When you are with me,",
      type: "comments",
    },
  ]);

  createLineFromArray([
    {
      str: "if",
      type: "condition",
    },
    { str: "(", type: "keyword" },
    { str: "u.", type: "normal" },
    { str: "with", type: "function" },
    { str: "(", type: "keyword" },
    { str: "i", type: "normal" },
    { str: ")", type: "keyword" },
    { str: ")", type: "keyword" },
  ]);
  createLineFromArray([
    {
      str: "// I see everything in you.",
      type: "comments",
    },
  ]);

  createLineFromArray([
    {
      str: "  u = everything",
      type: "normal",
    },
  ]);
  createLineFromArray([
    {
      str: "// When you are not,",
      type: "comments",
    },
  ]);

  createLineFromArray([
    {
      str: "else",
      type: "condition",
    },
  ]);
  createLineFromArray([
    {
      str: "// I see you in everything.",
      type: "comments",
    },
  ]);

  createLineFromArray([
    {
      str: "  everything = u",
      type: "normal",
    },
  ]);

  create_br(new_code);

  createLineFromArray([
    {
      str: "do",
      type: "condition",
    },
    { str: " {", type: "keyword" },
  ]);

  createStatement({
    comment: "I will love you forever...",
    object: "  i",
    func: "love",
    target: "u",
  });

  createLineFromArray([
    { str: "} ", type: "keyword" },
    {
      str: "while",
      type: "condition",
    },
    { str: " (", type: "keyword" },
    { str: "!death.", type: "normal" },
    { str: "do_part", type: "function" },
    { str: "(", type: "keyword" },
    { str: "we", type: "normal" },
    { str: ")", type: "keyword" },
    { str: ")", type: "keyword" },
  ]);
}

function create_line(parent_ele, str_line, /*optional*/ div_list, type) {
  for (var i = 0; i < str_line.length; i++) {
    str = str_line.substring(i, i + 1);

    //space
    if (str == " ") {
      create_space(new_code);
    } else {
      div_id = div_list.length;
      div_list[div_id] = create_div(parent_ele, type, str, div_id);
    }
  }
}

function create_br(parent_ele) {
  var div_text = document.createElement("br");
  div_text.style["float"] = "left";
  parent_ele.appendChild(div_text);
}

function create_space(parent_ele) {
  var div_text = document.createElement("div");
  //text
  div_text.innerHTML = "&nbsp";
  //div_text.style["margin-left"] = "7px";
  div_text.style["float"] = "left";
  parent_ele.appendChild(div_text);
}

function create_placeholder(parent_ele) {
  var div_text = document.createElement("div");
  //div_text.style["margin-left"] = "15px";
  div_text.innerHTML = "&nbsp&nbsp";
  div_text.style["float"] = "left";
  parent_ele.appendChild(div_text);
}

function create_div(parent_ele, type, str, div_id) {
  var div_text = document.createElement("div");
  //text
  //div_text.type = "text";
  //div_text.innerHTML = "t";
  div_text.id = div_id;
  //div_text.style["font-weight"] = "bold"
  //div_text.style["height"] = "100px"
  //div_text.style["width"] = "100px"

  //style

  div_text.style["position"] = "relative";

  if (type == "keyword") {
    div_text.style["color"] = "#569cd6";
    div_text.style["font-weight"] = "bold";
  } else if (type == "comments") {
    div_text.style["color"] = "#6a9957";
  } else if (type == "string") {
    div_text.style["color"] = "#ce9179";
  } else if (type == "function") {
    div_text.style["color"] = "#c8c814";
  } else if (type === "condition") {
    div_text.style["color"] = "#c486c0";
  } else {
  } //normal

  div_text.style["float"] = "left";
  div_text.innerHTML = str;

  parent_ele.appendChild(div_text);

  return div_text;
}

function code_fly(ele_id, left, top, speed) {
  var div = $("#" + ele_id);

  var relativeOffsetLeft = $("#" + ele_id).offset().left;
  var relativeOffsetTop = $("#" + ele_id).offset().top;

  var relativeOffset_Left_Content = $("#content").offset().left;
  var relativeOffset_Top_Content = $("#content").offset().top;

  div.animate(
    {
      left: left - relativeOffsetLeft + relativeOffset_Left_Content,
      top: top - relativeOffsetTop + relativeOffset_Top_Content,
      //left:left,
      //top: top
    },
    speed
  );
  //ele.animate({fontSize:'3em'},"slow");
}
