**Blog 1: What are some differences between interfaces and types in TypeScript?**<br/>
**TypeScript** এ অবজেক্ট এর কাঠামো সংজ্ঞায়িত করার জন্য **Interfaces Type Aliases** ব্যবহার করা হয়।
এই দুটির কাজ একই রকম হলেও বেশ কিছু বিষয়ে একটি আরেকটির থেকে আলাদা।

**Interface:**
১. এই ক্ষেত্রে **Declaration Merging** হয়ে থাকে অর্থাৎ, একই নামে একাধিক **Interface** ঘোষণা করলে টাইপস্ক্রিপ্ট সেগুলোকে 
   মার্জ করে
২. অবজেক্ট এর কাঠামো, ফাংশনের কাঠামো, এবং ক্লাস implement করার জন্য ব্যবহৃত হয়।
৩. শুধুমাত্র অবজেক্ট কাঠামো সংজ্ঞায়িত করতে পারে কিন্তু, ইউনিয়ন, টুপল, বা প্রিমিটিভ টাইপের জন্য এলিয়াস
    তৈরী করতে পারে না।

**Type Aliases:**
১. **Declaration Merging** হয় না। একই নামে একাধিক টাইপ declare করলে, **compilation error** দেখাবে।
২. অবজেক্টের কাঠামো সংজ্ঞায়িত করা ছাড়াও আরো বহুমুখী কাজে ব্যবহৃত হয়।
৩. যেকোনো টাইপের জন্য অ্যালিয়াস তৈরি করতে পারে: প্রিমিটিভ, ইউনিয়ন।

**Blog 5: Provide an example of using union and intersection types in TypeScript.**
**Union Type:**
ইউনিয়ন টাইপ একটি ভেরিয়েবলকে একাধিক ধরনের টাইপগুলির মধ্যে যেকোনো একটি হওয়ার অনুমতি দেয়। এটি OR লজিক ব্যবহার করে।

উদাহরণ:
নিচের টাইপটি আইডি হিসেবে number অথবা string গ্রহণ করতে পারে।
type ID = string | number;

function printID(id: ID) {
  if (typeof id === 'string') {
    console.log(`Your ID (String): ${id.toUpperCase()}`);
  } else {
    console.log(`Your ID (Number): ${id.toFixed(2)}`);
  }
}

**Intersection Type:**
ইন্টারসেকশন টাইপ একাধিক টাইপকে একত্রিত করে একটি নতুন একক টাইপ তৈরি করার অনুমতি দেয়, যেখানে ভেরিয়েবলটিকে অবশ্যই সেই টাইপগুলির সবগুলো বৈশিষ্ট্য ধারণ করতে হবে। 
এটি AND লজিক ব্যবহার করে।

উদাহরণ:
দুটি ইন্টারফেস উদাহরণ হিসেবে নিতে পারি। একটি মৌলিক ব্যবহারকারীর ডেটার জন্য এবং অন্যটি কর্মচারী হিসেবে তার ভূমিকার জন্য। আমরা এই দুটিকে একত্রিত করে একটি নতুন টাইপ তৈরি করব।

interface User {
  name: string;
  email: string;
}

interface Employee {
  employeeId: number;
  role: 'Manager' | 'Staff' | 'Trainee';
}

type FullEmployee = User & Employee;

const newEmployee: FullEmployee = {
  name: "Mr Jack",
  email: "jack@company.com",
  employeeId: 4001,
  role: "Manager" 
};

console.log(`The ID of ${newEmployee.name} is: ${newEmployee.employeeId}`);
