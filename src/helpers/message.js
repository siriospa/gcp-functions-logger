// Copyright 2024 Sirio S.p.A.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const { formatHeader, formatBody } = require("./format")

/**
 * Sends the given message as information.
 * @param {string} message Message text.
 */
exports.info = (message) =>
  console.info(formatHeader("Info"), formatBody(message))

/**
 * Sends the given message as error.
 * @param {string} message Message text.
 */
exports.error = (message) =>
  console.error(formatHeader("Error"), formatBody(message))

/**
 * Sends the given message as success.
 * @param {string} message Message text.
 */
exports.success = (message) =>
  console.log(formatHeader("Success"), formatBody(message))
