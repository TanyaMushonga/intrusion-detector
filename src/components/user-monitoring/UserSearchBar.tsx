import { Input } from "@/components/ui/input";

export function UserSearchBar() {
  return (
    <div className="mb-4">
      <Input
        placeholder="Search by account number or user ID"
        className="w-full"
      />
    </div>
  );
}
