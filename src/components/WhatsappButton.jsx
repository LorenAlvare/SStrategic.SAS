export default function WhatsappButton() {
  const mensaje = encodeURIComponent(
    "Hola, quiero solicitar información sobre los servicios de SSTrategic SAS."
  );

  return (
    <a
      href={`https://wa.me/573208402820?text=${mensaje}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition z-50"
      aria-label="WhatsApp SSTrategic SAS"
    >
      💬
    </a>
  );
}