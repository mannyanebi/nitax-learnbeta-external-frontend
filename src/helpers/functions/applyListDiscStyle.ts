export const applyListDiscStyle = (content: string) => {
  content = content.replace(/<ul>/g, '<ul class="list-disc ml-5">');
  content = content.replace(/<a(.*?)>/g, '<a$1 style="text-decoration: underline; color: blue;">');

  return content
};