function parseData(data) {
  try {
    if (typeof data !== 'string') {
      throw new Error('Invalid data type. Expected string.');
    }

    const lines = data.trim().split('\n');
    const header = lines.shift().split(',');
    const parsedData = [];

    for (const line of lines) {
      const values = line.split(',');
      if (values.length !== header.length) {
        throw new Error('Invalid data format. Expected comma-separated values.');
      }

      const parsedLine = {};
      for (let i = 0; i < header.length; i++) {
        parsedLine[header[i]] = values[i].trim();
      }

      parsedData.push(parsedLine);
    }

    return parsedData;
  } catch (error) {
    return { error: error.message };
  }
}

module.exports = { parseData };