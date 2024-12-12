import { X as fallback, Y as ensure_array_like, Z as bind_props, S as pop, Q as push } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _page($$payload, $$props) {
  push();
  let Tasks = fallback($$props["Tasks"], () => [], true);
  let task = fallback($$props["task"], "");
  let num = fallback($$props["num"], 1);
  function mergesort(array) {
    if (array.length <= 1) {
      return array;
    }
    const mid = Math.floor(array.length / 2);
    const left = mergesort(array.slice(0, mid));
    const right = mergesort(array.slice(mid));
    return merge(left, right);
  }
  function merge(left, right) {
    const res = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i].num >= right[j].num) {
        res.push(left[i]);
        i++;
      } else {
        res.push(right[j]);
        j++;
      }
    }
    return res.concat(left.slice(i)).concat(right.slice(j));
  }
  $$payload.out += `<center><div class="all-container svelte-1fi9csx"><center><h1>Todoリスト</h1> <input type="text"${attr("value", task)} placeholder="Taskname"> <input type="number"${attr("value", num)} min="1" max="5"> <button>作成</button></center></div> <br> `;
  if (Tasks.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(Tasks);
    $$payload.out += `<!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let { task: task2, num: num2 } = each_array[i];
      if (num2 == 1) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div class="task-container svelte-1fi9csx"><div class="task1 svelte-1fi9csx"><p>${escape_html(task2)}</p> <button>完了</button></div></div>`;
      } else {
        $$payload.out += "<!--[!-->";
        if (num2 == 2) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<div class="task-container svelte-1fi9csx"><div class="task2 svelte-1fi9csx"><p>${escape_html(task2)}</p> <button>完了</button></div></div>`;
        } else {
          $$payload.out += "<!--[!-->";
          if (num2 == 3) {
            $$payload.out += "<!--[-->";
            $$payload.out += `<div class="task-container svelte-1fi9csx"><div class="task3 svelte-1fi9csx"><p>${escape_html(task2)}</p> <button>完了</button></div></div>`;
          } else {
            $$payload.out += "<!--[!-->";
            if (num2 == 4) {
              $$payload.out += "<!--[-->";
              $$payload.out += `<div class="task-container svelte-1fi9csx"><div class="task4 svelte-1fi9csx"><p>${escape_html(task2)}</p> <button>完了</button></div></div>`;
            } else {
              $$payload.out += "<!--[!-->";
              $$payload.out += `<div class="task-container svelte-1fi9csx"><div class="task5 svelte-1fi9csx"><p>${escape_html(task2)}</p> <button>完了</button></div></div>`;
            }
            $$payload.out += `<!--]-->`;
          }
          $$payload.out += `<!--]-->`;
        }
        $$payload.out += `<!--]-->`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></center>`;
  bind_props($$props, { Tasks, task, num, mergesort, merge });
  pop();
}
export {
  _page as default
};
