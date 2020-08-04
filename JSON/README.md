# JavaScript Questions JSON

The JSON files in the folders are JSON versions of the questions from the Markdown files for each language. 

The JSON files were created using the `parser-{lang-name}.js` script in each of the language folders within the `JSON` folder here. The data was parsed from the `{lang-name}.txt` files in each of the directories, which are slightly modified versions of the Markdown files you can view and access in the repo.

### Trivia Game && API Querying
There is also a public API and trivia game based on this data that you can find here: 
https://www.javascript-trivia.com/

### Question Data Schema
* **`id`:** Integer. Unique identifier for the question.
* **`question`:** String. Formatted in Markdown.
* **`codeSnippet`:** String. Multiline JavaScript.
  * **Note:** Not all questions include a code snippet, so if you are using the API to dynamically render questions, you should include checks to see if the `codeSnippet` is included.
* **`answerOptions`:** Object. The keys are a question label, usually A-D, and the value is the answer text.
* **`correctAnswer`:** String. Single letter corresponing to the the correct key of the answer options. 
* **`answerExplanation`:** String. Formatted in Markdown.


### Example Data
```json
{
    "id": 38,
    "question": "What's the output?",
    "codeSnippet": "(() => {\n  let x, y;\n  try {\n    throw new Error();\n  } catch (x) {\n    (x = 1), (y = 2);\n    console.log(x);\n  }\n  console.log(x);\n  console.log(y);\n})();",
    "answerOptions": {
        "A": "`1` `undefined` `2`",
        "B": "`undefined` `undefined` `undefined`",
        "C": "`1` `1` `2`",
        "D": "`1` `undefined` `undefined`"
    },
    "correctAnswer": "A",
    "answerExplanation": "The `catch` block receives the argument `x`. This is not the same `x` as the variable when we pass arguments. This variable `x` is block-scoped.\n\nLater, we set this block-scoped variable equal to `1`, and set the value of the variable `y`. Now, we log the block-scoped variable `x`, which is equal to `1`.\n\nOutside of the `catch` block, `x` is still `undefined`, and `y` is `2`. When we want to `console.log(x)` outside of the `catch` block, it returns `undefined`, and `y` returns `2`."
}
```

*Created by [Ben Perlmutter](https://github.com/bpmutter)*
